import List, {
  ContentWrapper,
  TitleArea,
  Cost,
  TitleCost,
  CostList,
} from './ListOngkirStyle';

const Index = ({ isLoading, data }) => {
  return (
    <List>
      {isLoading && <p>Loading...</p>}

      {!isLoading && (
        <ContentWrapper>
          <TitleArea>
            <h1>{data[0].name}</h1>
          </TitleArea>

          {data[0].costs.length > 0 &&
            data[0].costs.map((costsList, icostslist) => {
              return (
                <Cost key={icostslist}>
                  <TitleCost>
                    <h1>
                      {costsList.service} - {costsList.description}
                    </h1>
                  </TitleCost>

                  <CostList>
                    {costsList.cost.map((cost, icost) => {
                      return (
                        <li key={icost}>
                          <p>ETD : {cost.etd ? cost.etd : '-'}</p>
                          <p>Harga : Rp {cost.value ? cost.value : '-'}</p>
                          <p>Note : {cost.note ? cost.note : '-'}</p>
                        </li>
                      );
                    })}
                  </CostList>
                </Cost>
              );
            })}
        </ContentWrapper>
      )}
    </List>
  );
};

export default Index;
