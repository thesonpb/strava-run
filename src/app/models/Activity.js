import Base from "./Base";

class Activity extends Base {
  getAthleteActivities = () => this.apiGet("/athlete/activities");
}
export default new Activity();
