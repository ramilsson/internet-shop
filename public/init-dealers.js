const DEALERS = ['0c4aab30', '1efa7e46', '86e64a33'];

const initDealers = (dealers) => {
  localStorage['dealers'] = JSON.stringify(dealers);
};

initDealers(DEALERS);
