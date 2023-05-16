import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { getMissions } from '../redux/Missions/missionsSlice';

const MyProfile = () => {
  const missions = useSelector((store) => store.missions.missions);
  const reserved = missions.filter((mission) => mission.reserved !== false);
  const rockets = useSelector((store) => store.rockets.rocketsList);
  const resRockets = rockets.filter((rocket) => rocket.reserved !== false);

  return (
    <section className="profile_container">
      <div className="reserved_content">
        <h2 className="title">My Missions</h2>
        {reserved && reserved.length > 0 ? (
          <table className="missions_list">
            <tbody>
              {reserved.map((mission) => (
                <tr key={mission.mission_id}>
                  <td>{mission.mission_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : <p>No missions reserved</p>}
      </div>
      <div className="reserved_content rockets-cont">
        <h2 className="title">My Rockets</h2>
        {resRockets && resRockets.length > 0 ? (
          <table className="missions_list rockets-list">
            <tbody>
              {resRockets.map((rocket) => (
                <tr key={rocket.id}>
                  <td>{rocket.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : <p>No rockets reserved</p>}
      </div>

    </section>
  );
};
export default MyProfile;
