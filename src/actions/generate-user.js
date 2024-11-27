// @ts-check

/**
 * @typedef { Object } APIResponse
 * @property { Result[] } results
 * @property { Info } info
 */

/**
 * @typedef { Object } Info
 * @property { string } seed
 * @property { number } results
 * @property { number } page
 * @property { string } version
 */

/**
 * @typedef { Object } Result
 * @property { string } gender
 * @property { Name } name
 * @property { APIResponseLocation } location
 * @property { string } email
 * @property { Login } login
 * @property { DateOfBirth } dob
 * @property { DateOfBirth } registered
 * @property { string } phone
 * @property { string } cell
 * @property { ID } id
 * @property { Picture } picture
 * @property { string } nat
 */

/**
 * @typedef { Object } Name
 * @property { string } title
 * @property { string } first
 * @property { string } last
 */

/**
 * @typedef { Object } APIResponseLocation
 * @property { Street } street
 * @property { string } city
 * @property { string } state
 * @property { string } country
 * @property { string } postcode
 * @property { Coordinates } coordinates
 * @property { Timezone } timezone
 */

/**
 * @typedef { Object } Street
 * @property { number } number
 * @property { string } name
 */

/**
 * @typedef { Object } Coordinates
 * @property { string } latitude
 * @property { string } longitude
 */

/**
 * @typedef { Object } Timezone
 * @property { string } offset
 * @property { string } description
 */

/**
 * @typedef { Object } Login
 * @property { string } uuid
 * @property { string } username
 * @property { string } password
 * @property { string } salt
 * @property { string } md5
 * @property { string } sha1
 * @property { string } sha256
 */

/**
 * @typedef { Object } DateOfBirth
 * @property { Date } date
 * @property { number } age
 */

/**
 * @typedef { Object } ID
 * @property { string } name
 * @property { string } value
 */

/**
 * @typedef { Object } Picture
 * @property { string } large
 * @property { string } medium
 * @property { string } thumbnail
 */

/**
 * @param {{ gender?: string; nationality?: string }} param
 * @returns { Promise<APIResponse> }
 */
async function generateUser({ gender, nationality }) {
  const response = await fetch(
    `https://randomuser.me/api/1.4/?gender=${gender}&nat=${nationality}`,
    { method: "GET", headers: { "Content-Type": "application/json" } }
  );

  /**
   * @type { APIResponse }
   */
  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      `Unexpected error: ${response.status} - ${response.statusText}`
    );
  }

  return data;
}

export { generateUser };
