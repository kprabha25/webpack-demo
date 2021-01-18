import { groupBy } from 'lodash-es'
import people from './people'

const managerGroups = groupBy(people, "manager")

const root = document.createElement("div")
root.innerHTML = `<p>${JSON.stringify(managerGroups, null, 2)}</p>`
document.body.appendChild(root)