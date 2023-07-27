import Base from "./Base";

class Club extends Base {
  getClubMember = (id) => this.apiGet(`/clubs/${id}/members`);
  getClubActivity = (id) => this.apiGet(`/clubs/${id}/activities`);
}
export default new Club();
