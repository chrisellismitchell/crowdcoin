import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xb21530c0BD9310eBe453E491D55E9F7478265041"
);

export default instance;
