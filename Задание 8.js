let flowersColor=new Map();
flowersColor.set("Роза", "красная");
flowersColor.set("Лилия", "белая");
flowersColor.set("Хризантема","желтая");
for (let flowers of flowersColor.keys()) {
  console.log(`Ключ-${flowers}, Значение-${flowersColor.get(flowers)}`);
}