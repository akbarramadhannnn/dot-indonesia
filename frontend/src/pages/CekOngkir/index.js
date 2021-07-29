import { useCallback, useEffect, useState } from 'react';
import { Card, Input, Button, ListOngkir } from '../../components';
import { TitleArea, InputArea, Wrapper } from './CekOngkirStyles';
import axios from 'axios';

const Index = () => {
  const [asal, setAsal] = useState({
    value: '',
    id: '',
    suggestion: {
      isSuggestion: true,
      dataSuggestion: [],
      isLoading: false,
    },
  });
  const [tujuan, setTujuan] = useState({
    value: '',
    id: '',
    suggestion: {
      isSuggestion: true,
      dataSuggestion: [],
      isLoading: false,
    },
  });
  const [weight, setWeight] = useState('');
  const [courier, setCourier] = useState('');
  const [ongkir, setOngkir] = useState({
    show: false,
    isLoading: false,
    data: [],
  });

  useEffect(() => {
    setAsal((oldState) => ({
      ...oldState,
      suggestion: {
        ...oldState.suggestion,
        isLoading: true,
      },
    }));
    setTujuan((oldState) => ({
      ...oldState,
      suggestion: {
        ...oldState.suggestion,
        isLoading: true,
      },
    }));
    axios({
      method: 'POST',
      url: 'http://localhost:8080/city',
    }).then((response) => {
      const results = response.data.rajaongkir.results;
      const resultData = [];
      for (let i = 0; i < results.length; i++) {
        resultData.push({
          value: results[i].city_id,
          label: results[i].city_name,
        });
      }
      setAsal((oldState) => ({
        ...oldState,
        suggestion: {
          ...oldState.suggestion,
          dataSuggestion: resultData,
          isLoading: false,
        },
      }));
      setTujuan((oldState) => ({
        ...oldState,
        suggestion: {
          ...oldState.suggestion,
          dataSuggestion: resultData,
          isLoading: false,
        },
      }));
    });
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setOngkir({
      show: false,
      isLoading: false,
      data: [],
    });

    if (name === 'asal') {
      setAsal((oldState) => ({
        ...oldState,
        value: value,
      }));
    } else if (name === 'tujuan') {
      setTujuan((oldState) => ({
        ...oldState,
        value: value,
      }));
    } else if (name === 'weight') {
      setWeight(value);
    } else {
      setCourier(value);
    }
  }, []);

  const handleSuggest = useCallback((data) => {
    if (data.name === 'asal') {
      setAsal((oldState) => ({
        ...oldState,
        id: data.data.value,
        value: data.data.label,
      }));
    } else if (data.name === 'tujuan') {
      setTujuan((oldState) => ({
        ...oldState,
        id: data.data.value,
        value: data.data.label,
      }));
    }
  }, []);

  const handleCek = useCallback(() => {
    if (asal.id === '') {
      console.log('id asal kosong');
    } else if (tujuan.id === '') {
      console.log('id tujuan kosong');
    } else if (weight === '') {
      console.log('wight kosong');
    } else if (courier === '') {
      console.log('courier kosong');
    } else {
      setOngkir((oldState) => ({
        ...oldState,
        show: true,
        isLoading: true,
      }));
      const payload = {
        origin: asal.id,
        destination: tujuan.id,
        weight: weight,
        courier: courier,
      };
      axios({
        method: 'POST',
        url: 'http://localhost:8080/cost',
        data: payload,
      }).then((response) => {
        if (response.data.rajaongkir.status.code === 200) {
          setOngkir((oldState) => ({
            ...oldState,
            data: response.data.rajaongkir.results,
            isLoading: false,
          }));
        }
      });
    }
  }, [asal, tujuan, weight, courier]);

  return (
    <Card>
      <TitleArea>
        <h1>Cek Ongkir</h1>
      </TitleArea>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <InputArea>
          <Wrapper>
            <Input
              type="text"
              value={asal.value}
              onChange={handleChange}
              name="asal"
              placeholder="Kota Asal"
              suggestion={{
                ...asal.suggestion,
                handleChange: (data) => handleSuggest(data),
              }}
            />
          </Wrapper>

          <Wrapper>
            <Input
              type="text"
              value={tujuan.value}
              onChange={handleChange}
              name="tujuan"
              placeholder="Kota Tujuan"
              suggestion={{
                ...tujuan.suggestion,
                handleChange: (data) => handleSuggest(data),
              }}
            />
          </Wrapper>

          <Wrapper>
            <Input
              type="number"
              value={weight}
              onChange={handleChange}
              name="weight"
              placeholder="Berat Barang / Gram"
            />
          </Wrapper>

          <Wrapper>
            <Input
              type="select"
              value={courier}
              onChange={handleChange}
              name="courier"
              dataSelect={[
                {
                  value: 'pos',
                  label: 'POS',
                },
                {
                  value: 'tiki',
                  label: 'TIKI',
                },
                {
                  value: 'jne',
                  label: 'JNE',
                },
              ]}
            />
          </Wrapper>
        </InputArea>

        <div>
          <Button onClick={handleCek}>Cek</Button>
        </div>
      </div>

      {ongkir.show && (
        <ListOngkir isLoading={ongkir.isLoading} data={ongkir.data} />
      )}
    </Card>
  );
};

export default Index;
