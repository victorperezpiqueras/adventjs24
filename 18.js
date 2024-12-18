/* 
Santa Claus has a magic diary 📇 where he keeps the addresses of the children to deliver the presents. The problem: the diary's information is mixed and misformatted. The lines contain a magic phone number, a child's name, and their address, but everything is surrounded by strange characters.

Santa needs your help to find specific information from the diary. Write a function that, given the diary's content and a phone number, returns the child's name and address.

Keep in mind that in the diary:

    Phone numbers are formatted as +X-YYY-YYY-YYY (where X is one or two digits, and Y is a digit).
    Each child's name is always between < and >

The idea is for you to write a function that, given the full phone number or part of it, returns the child's name and address. If it doesn't find anything or there is more than one result, you must return null.

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

findInAgenda(agenda, '34-600-123-456')
// { name: "Juan Perez", address: "Calle Gran Via 12" }

findInAgenda(agenda, '600-987')
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

findInAgenda(agenda, '111')
// null
// Explanation: No results

findInAgenda(agenda, '1')
// null
// Explanation: Too many results
*/

/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
  // 5 stars (remove regexPhone comment or it gets 4 stars)
  const contacts = agenda.split("\n");
  const regexName = /<([\w\s]*)>/gm; // name in < >
  const regexPhone = /\+[\d]{1,2}-[\d]{3}-[\d]{3}-[\d]{3}/gm; // phone with format of + (1-2 digits) and XXX-XXX-XXX

  let matches = [];
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];
    const contactName = contact.match(regexName)?.[0];
    const contactPhone = contact.match(regexPhone)?.[0];
    const contactNameCleaned = contact.match(regexName)?.[0]?.slice(1, -1); // remove < >
    const contactPhoneCleaned = contact.match(regexPhone)?.[0]?.slice(1); // remove +
    if (contactPhoneCleaned.includes(phone)) {
      const address = contact
        .replace(contactName, "")
        .replace(contactPhone, "")
        .trim();
      matches.push({
        name: contactNameCleaned,
        address,
      });
    }
  }
  return matches.length === 1 ? matches[0] : null;
}

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;
console.log(findInAgenda(agenda, "34-600-123-456"));
console.log(findInAgenda(agenda, "111"));
