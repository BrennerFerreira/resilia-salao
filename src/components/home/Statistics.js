export const Statistics = (props) => {
  const { statistics } = props;

  return (
    <div>
      <div>Usuários cadastrados: {statistics.users}</div>
      <div>Produtos cadastrados: {statistics.products}</div>
      <div>
        Atendimentos agendados: {statistics.schedules.numberOfNextSchedules}
      </div>
      {statistics.schedules.numberOfNextSchedules ? (
        <div>Próximo atendimento: {statistics.schedules.nextSchedule.data}</div>
      ) : (
        false
      )}
    </div>
  );
};
