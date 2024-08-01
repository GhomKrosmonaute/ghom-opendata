import { ORM } from "@ghom/orm"
import path from "path"
import fs from "fs"

const dataNames = fs.readdirSync(".").filter((name) => name === "index.js")

let inferred = `export type DataName = ${dataNames
  .map((name) => `'${name.replace(".json", "")}'`)
  .join(" | ")}\n`

fs.writeFileSync(
  path.join(process.cwd(), "lib", "inferred.ts"),
  inferred,
  "utf-8"
)

const init = async () => {
  for (const dataName of dataNames) {
    const orm = new ORM({
      location: path.join(process.cwd(), dataName),
      database: {
        client: "sqlite3",
        connection: {
          filename: path.join(process.cwd(), "public", "data", dataName),
        },
      },
    })

    await orm.init()
  }
}

init()
  .then(() => {
    console.log("done.")
    process.exit(0)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
