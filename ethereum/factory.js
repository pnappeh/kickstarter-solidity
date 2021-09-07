import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x313944831eFd3c7DDED918922eFfFe42C79EDa24'
);

export default instance;