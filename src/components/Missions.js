import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMissions, joinMissions, leaveMissions } from '../redux/Missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  const missions = useSelector((store) => store.missions);
  return (missions && missions.missions.length > 0 ? (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>

          </tr>
        </thead>
        <tbody>
          {missions.missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td className="name">{mission.mission_name}</td>
              <td className="description">{mission.description}</td>
              <td className="status">
                {mission.reserved ? (
                  <span className="active_member">Active Member</span>
                ) : (
                  <span className="not_a_member">Not A Member</span>
                )}

              </td>
              <td>
                {mission.reserved ? (
                  <button type="button" className="btn_leave_mission" onClick={() => dispatch(leaveMissions(mission.mission_id))}>Leave Mission</button>
                ) : (
                  <button type="button" className="btn_join_mission" onClick={() => dispatch(joinMissions(mission.mission_id))}>Join Mission</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  ) : <p>Loading...</p>
  );
};

export default Missions;
