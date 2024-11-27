// @ts-check

/**
 * @param { import("../actions/generate-user").Result} user
 * @param { HTMLTableElement | HTMLElement | Element | null } node
 */
function renderTable(user, node) {
  if (!(node instanceof HTMLTableElement))
    throw new Error("Node is not an instance of HTMLTableElement");

  const tableBody = node.querySelector("tbody");

  if (!tableBody) throw new Error("TableBody is undefined");

  const dob = new Date(user.dob.date);
  const dateFormatter = new Intl.DateTimeFormat();

  tableBody.innerHTML = `
    <tr
      class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
    >
      <td class="p-4 align-middle font-semibold text-nowrap">
        ${user.name.title}. ${user.name.first} ${user.name.last}
      </td>
      <td class="p-4 align-middle text-nowrap">
        ${user.email}
      </td>
      <td class="p-4 align-middle capitalize text-nowrap">
        ${user.gender}
      </td>
      <td class="p-4 align-middle text-nowrap">
        ${dateFormatter.format(dob)}
      </td>
       <td class="p-4 align-middle text-nowrap">
         ${user.location.street.name}, ${user.location.city}, ${
    user.location.state
  } ${user.location.postcode}, ${user.location.country}
      </td>
    </tr>
  `;
}

export { renderTable };
