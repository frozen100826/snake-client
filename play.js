// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.2.14', // IP address here,
    port: 50541   // PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', (data) => {
      console.log('I gat dat from serva >>', data);
    });
  return conn;
};
