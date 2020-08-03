function getVarsFromHomeURL(search) {
  const params = new URLSearchParams(search);
  const vars = {};
  if (params.get('startDate')) vars.startDate = new Date(params.get('startDate'));
  else vars.startDate = new Date('2016-08-21T01:00:00');
  if (params.get('endDate')) vars.endDate = new Date(params.get('endDate'));
  else {
    vars.endDate = new Date(vars.startDate.getTime() + 2 * 24 * 60 * 60 * 1000);
  }
  if (params.get('district')) vars.district = params.get('district');
  else vars.district = 'B';
  if (params.get('beat')) vars.beat = params.get('beat');
  else vars.beat = 'B2';
  return vars;
}

export default getVarsFromHomeURL;
