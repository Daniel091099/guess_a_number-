const defaultNumberOfChances = 5;

const settings = {
  numberOfChances: defaultNumberOfChances,
};

function revertSettings() {
  setSettings(defaultNumberOfChances);
}

function getSettings() {
  return settings;
}

function setSettings(value) {
  settings.numberOfChances = value;
}

module.exports = {
  getSettings,
  setSettings,
  revertSettings,
};
