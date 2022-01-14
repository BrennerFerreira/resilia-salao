import styled from "styled-components";
import { NextSchedule } from "./NextSchedule";
import { StatisticsCard } from "./StatisticsCard";

const StyledDiv = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
`;

export const Statistics = ({ statistics }) => {
  return (
    <div>
      <StyledDiv>
        <StatisticsCard
          to="/usuarios"
          label="Usuários cadastrados"
          data={statistics.users}
        />

        <StatisticsCard
          to="/produtos"
          label="Produtos cadastrados"
          data={statistics.products}
        />

        <StatisticsCard
          to="/agendamentos"
          label="Atendimentos agendados"
          data={statistics.schedules.numberOfNextSchedules}
        />
      </StyledDiv>
      <div>
        {statistics.schedules.numberOfNextSchedules ? (
          <NextSchedule {...statistics.schedules.nextSchedule[0]} />
        ) : (
          false
        )}
      </div>
    </div>
  );
};
