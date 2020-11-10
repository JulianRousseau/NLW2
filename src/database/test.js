const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  await saveOrphanage(db, {
    lat: "-27.4622145",
    lng: "-58.9911601",
    name: "hogar de niñas",
    about: "trae paz y alegria a las chicas",
    whatsapp: "3624208302",
    images: [
      "https://images.unsplash.com/photo-1572248364230-7f412885f2da?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1600712244180-7ef5e5c82cb5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions: "traer alimentos para donar",
    opening_hours: "Horario de visitas de 8h hasta 18h",
    open_on_weekens: "0" 
  });

  const selectedOrphaneges = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphaneges);

  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');
  console.log(orphanage);

  console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
  console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
});
