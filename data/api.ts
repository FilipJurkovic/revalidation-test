export const getTime = async (): Promise<any> => {
  var time = await fetch("http://worldtimeapi.org/api/timezone/America/Chicago", { next: { tags: ["testAPI"] } });
  var res = await time.json();
  return res.datetime;
};
