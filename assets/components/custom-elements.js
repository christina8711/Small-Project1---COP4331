/* To add the Navigation sidebar to your page, make sure to include this in your `<header>'
   '<script type="module" src="assets/components/custom-elements.js"></script>'
   Then in the body of your HTML, add <nav-sidebar></nav-sidebar>*/
class NavSidebar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
 <div class="container-fluid">
  <div class="row flex-nowrap">
    <div class="col-auto px-sm-2 px-0 " style="background-color: #746aff;   z-index: 1;">
      <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100" >
        <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span class="fs-5 d-none d-sm-inline">MitskiUCF.xyz</span>
        </a>
        <ul
          class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" >
          <li class=" nav-item nav-content homepage">
            <a href="homepage.html" class="nav-content nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right"
              data-bs-original-title="Home">
              <i<?xml version="1.0" encoding="iso-8859-1"?>
              <svg class="navicons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50"
                width="100px" height="100px">
                <polygon points="41,5 41,10.73 35,6.05 35,5 " />
                <path
                  d="M48.79,20.62C48.59,20.87,48.3,21,48,21c-0.22,0-0.43-0.07-0.62-0.21L46,19.71V46c0,0.55-0.45,1-1,1H31V29H19v18H5c-0.55,0-1-0.45-1-1V19.71l-1.38,1.08c-0.44,0.34-1.07,0.26-1.41-0.17c-0.34-0.44-0.26-1.07,0.17-1.41l23-17.95c0.37-0.28,0.87-0.28,1.24,0l23,17.95C49.05,19.55,49.13,20.18,48.79,20.62z" />>
              </svg>
               </i>
               <span class="ms-1 d-none d-sm-inline">Home</span>
            </a>
          </li>
          <li class=" nav-item nav-content contacts">
            <a href="contactsman.html" class="nav-content nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right"
              data-bs-original-title="Contact Manager">
                <svg class="navicons" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122.88 114.37">
                <defs>
                  <style>
                    .cls-1 {
                      fill-rule: evenodd;
                    }
                  </style>
                </defs>
                <title>manage</title>
                <path class="cls-1"
                  d="M0,105.3C0,65.76,37.33,87.65,40.17,63.42c.31-2.64-5.91-9.61-7.34-14.43-3-4.87-4.15-12.6-.81-17.74,1.33-2.05.77-7.44.77-10.25,0-28,49.05-28,49.05,0,0,3.54-.82,8,1.11,10.76C86.17,36.42,84.5,44.67,81.79,49,80.06,54.05,73.44,60.55,74,63.42a15.9,15.9,0,0,0,2.82,6.74l-.48.47a8.54,8.54,0,0,0-1.84,2.73l-.12.31a8.22,8.22,0,0,0-.54,2.93,8.42,8.42,0,0,0,.68,3.28l.27.57a10.13,10.13,0,0,0-1.26.39,8.65,8.65,0,0,0-4.63,4.63l-.2.59a8.34,8.34,0,0,0-.42,2.61V94a8.23,8.23,0,0,0,.65,3.22l.24.52a8.69,8.69,0,0,0,1.51,2.13l.14.14a8.52,8.52,0,0,0,2.64,1.79l.67.24a6.94,6.94,0,0,0-.57,1.08,8.29,8.29,0,0,0-.62,2.14ZM115.16,75a2.16,2.16,0,0,0-1.55-.65,2.12,2.12,0,0,0-1.55.65L109.7,77.4a16.2,16.2,0,0,0-2-1.09,20.57,20.57,0,0,0-2.14-.83V71.86a2.17,2.17,0,0,0-2.18-2.19H98.83a2.12,2.12,0,0,0-1.53.64,2.09,2.09,0,0,0-.65,1.55v3.31a16.48,16.48,0,0,0-2.2.68,15.72,15.72,0,0,0-2,.94L89.8,74.21a2,2,0,0,0-1.51-.65,2.14,2.14,0,0,0-1.55.65L83.56,77.4a2.15,2.15,0,0,0,0,3.1l2.35,2.36a15.33,15.33,0,0,0-1.08,2A21.56,21.56,0,0,0,84,87H80.37a2.15,2.15,0,0,0-2.18,2.18v4.55a2.19,2.19,0,0,0,2.18,2.17h3.32a15.6,15.6,0,0,0,.67,2.2,20.6,20.6,0,0,0,.94,2.08l-2.58,2.57a2,2,0,0,0-.65,1.51,2.12,2.12,0,0,0,.65,1.55L85.91,109a2.2,2.2,0,0,0,1.55.61A2.17,2.17,0,0,0,89,109l2.36-2.4a16.2,16.2,0,0,0,2,1.09,21.31,21.31,0,0,0,2.13.83v3.62a2.19,2.19,0,0,0,2.19,2.19h4.54a2.12,2.12,0,0,0,1.53-.64,2.09,2.09,0,0,0,.65-1.55v-3.31a16.48,16.48,0,0,0,2.2-.68,21.65,21.65,0,0,0,2.08-.94l2.57,2.58a2,2,0,0,0,1.52.65,2,2,0,0,0,1.54-.65l3.22-3.19a2.19,2.19,0,0,0,.62-1.55,2.15,2.15,0,0,0-.62-1.55l-2.39-2.36a15.33,15.33,0,0,0,1.08-2,21.56,21.56,0,0,0,.84-2.14h3.62a2.15,2.15,0,0,0,2.18-2.18V90.31a2.13,2.13,0,0,0-.63-1.52,2.07,2.07,0,0,0-1.55-.65h-3.32a19.5,19.5,0,0,0-.67-2.18,16.93,16.93,0,0,0-.94-2.06l2.57-2.61a2,2,0,0,0,.66-1.52,2.11,2.11,0,0,0-.66-1.54L115.16,75Zm-14.63,8.08a8.89,8.89,0,0,1,3.48.69,8.81,8.81,0,0,1,4.73,4.74,9,9,0,0,1,0,6.94,8.81,8.81,0,0,1-4.73,4.74,9.1,9.1,0,0,1-7,0,8.81,8.81,0,0,1-4.73-4.74,9,9,0,0,1,0-6.94,8.81,8.81,0,0,1,4.73-4.74,8.88,8.88,0,0,1,3.47-.69Z" />
              </svg>
               </i>
               <span class="ms-1 d-none d-sm-inline">Manage</span>
            </a>
          </li>
        </ul>
        <ul class="nav nav-pills flex-column align-items-center align-items-sm-start">
          <a href="index.html" class="nav-content nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right"
            data-bs-original-title="Logout">
          <li class=" nav-item nav-content logout">
          <div></div>
              <svg class="navicons" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd"
                clip-rule="evenodd" viewBox="0 0 474 512.46">
                <path
                  d="M249.71.13 12.08 35.6C5.46 36.59 0 43.43 0 50.23v418.88c0 6.77 5.39 9.38 12.08 10.31l237.63 32.97c6.68.92 12.08-7.77 12.08-14.63V10.44c0-6.86-5.53-11.28-12.08-10.31zm124.96 329.08-.01-34.07c-.58.17-1.2.27-1.83.27h-53.47c-3.55 0-6.45-2.96-6.45-6.45v-66.2c0-3.48 2.97-6.45 6.45-6.45h53.47c.63 0 1.24.1 1.82.27v-34.06c0-6.29 5.1-11.4 11.39-11.4 3.29 0 6.25 1.4 8.33 3.63l76.01 70.9c4.59 4.27 4.85 11.47.58 16.06l-76.95 75.59c-4.47 4.4-11.67 4.34-16.07-.13a11.439 11.439 0 0 1-3.27-7.96zm-87.26 129.54h31.02V345.46h25.37v113.9c0 6.77-2.8 12.95-7.27 17.44-4.47 4.52-10.67 7.31-17.49 7.31h-31.63v-25.36zm31.02-292.48V52.98h-31.02V27.62h31.63c6.81 0 13.01 2.79 17.49 7.27 4.47 4.48 7.27 10.68 7.27 17.49v113.89h-25.37zm-87.67 58.52-24.93-5.68v74.24l24.93-7.18v-61.38z" />
              </svg>
               <button class="ms-1 d-none d-sm-inline" id="logout-button">Logout</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
        `;
  }
}
customElements.define("nav-sidebar", NavSidebar);

class CountriesList extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <div class="input-group mb-3">
<select id="country" name="country" class="form-control">
    <option value="Select">Select</option>
    <option value="Afghanistan">Afghanistan</option>
    <option value="Åland Islands">Åland Islands</option>
    <option value="Albania">Albania</option>
    <option value="Algeria">Algeria</option>
    <option value="American Samoa">American Samoa</option>
    <option value="Andorra">Andorra</option>
    <option value="Angola">Angola</option>
    <option value="Anguilla">Anguilla</option>
    <option value="Antarctica">Antarctica</option>
    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
    <option value="Argentina">Argentina</option>
    <option value="Armenia">Armenia</option>
    <option value="Aruba">Aruba</option>
    <option value="Australia">Australia</option>
    <option value="Austria">Austria</option>
    <option value="Azerbaijan">Azerbaijan</option>
    <option value="Bahamas">Bahamas</option>
    <option value="Bahrain">Bahrain</option>
    <option value="Bangladesh">Bangladesh</option>
    <option value="Barbados">Barbados</option>
    <option value="Belarus">Belarus</option>
    <option value="Belgium">Belgium</option>
    <option value="Belize">Belize</option>
    <option value="Benin">Benin</option>
    <option value="Bermuda">Bermuda</option>
    <option value="Bhutan">Bhutan</option>
    <option value="Bolivia">Bolivia</option>
    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
    <option value="Botswana">Botswana</option>
    <option value="Bouvet Island">Bouvet Island</option>
    <option value="Brazil">Brazil</option>
    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
    <option value="Brunei Darussalam">Brunei Darussalam</option>
    <option value="Bulgaria">Bulgaria</option>
    <option value="Burkina Faso">Burkina Faso</option>
    <option value="Burundi">Burundi</option>
    <option value="Cambodia">Cambodia</option>
    <option value="Cameroon">Cameroon</option>
    <option value="Canada">Canada</option>
    <option value="Cape Verde">Cape Verde</option>
    <option value="Cayman Islands">Cayman Islands</option>
    <option value="Central African Republic">Central African Republic</option>
    <option value="Chad">Chad</option>
    <option value="Chile">Chile</option>
    <option value="China">China</option>
    <option value="Christmas Island">Christmas Island</option>
    <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
    <option value="Colombia">Colombia</option>
    <option value="Comoros">Comoros</option>
    <option value="Congo">Congo</option>
    <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
    <option value="Cook Islands">Cook Islands</option>
    <option value="Costa Rica">Costa Rica</option>
    <option value="Cote D'ivoire">Cote D'ivoire</option>
    <option value="Croatia">Croatia</option>
    <option value="Cuba">Cuba</option>
    <option value="Cyprus">Cyprus</option>
    <option value="Czech Republic">Czech Republic</option>
    <option value="Denmark">Denmark</option>
    <option value="Djibouti">Djibouti</option>
    <option value="Dominica">Dominica</option>
    <option value="Dominican Republic">Dominican Republic</option>
    <option value="Ecuador">Ecuador</option>
    <option value="Egypt">Egypt</option>
    <option value="El Salvador">El Salvador</option>
    <option value="Equatorial Guinea">Equatorial Guinea</option>
    <option value="Eritrea">Eritrea</option>
    <option value="Estonia">Estonia</option>
    <option value="Ethiopia">Ethiopia</option>
    <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
    <option value="Faroe Islands">Faroe Islands</option>
    <option value="Fiji">Fiji</option>
    <option value="Finland">Finland</option>
    <option value="France">France</option>
    <option value="French Guiana">French Guiana</option>
    <option value="French Polynesia">French Polynesia</option>
    <option value="French Southern Territories">French Southern Territories</option>
    <option value="Gabon">Gabon</option>
    <option value="Gambia">Gambia</option>
    <option value="Georgia">Georgia</option>
    <option value="Germany">Germany</option>
    <option value="Ghana">Ghana</option>
    <option value="Gibraltar">Gibraltar</option>
    <option value="Greece">Greece</option>
    <option value="Greenland">Greenland</option>
    <option value="Grenada">Grenada</option>
    <option value="Guadeloupe">Guadeloupe</option>
    <option value="Guam">Guam</option>
    <option value="Guatemala">Guatemala</option>
    <option value="Guernsey">Guernsey</option>
    <option value="Guinea">Guinea</option>
    <option value="Guinea-bissau">Guinea-bissau</option>
    <option value="Guyana">Guyana</option>
    <option value="Haiti">Haiti</option>
    <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
    <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
    <option value="Honduras">Honduras</option>
    <option value="Hong Kong">Hong Kong</option>
    <option value="Hungary">Hungary</option>
    <option value="Iceland">Iceland</option>
    <option value="India">India</option>
    <option value="Indonesia">Indonesia</option>
    <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
    <option value="Iraq">Iraq</option>
    <option value="Ireland">Ireland</option>
    <option value="Isle of Man">Isle of Man</option>
    <option value="Israel">Israel</option>
    <option value="Italy">Italy</option>
    <option value="Jamaica">Jamaica</option>
    <option value="Japan">Japan</option>
    <option value="Jersey">Jersey</option>
    <option value="Jordan">Jordan</option>
    <option value="Kazakhstan">Kazakhstan</option>
    <option value="Kenya">Kenya</option>
    <option value="Kiribati">Kiribati</option>
    <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
    <option value="Korea, Republic of">Korea, Republic of</option>
    <option value="Kuwait">Kuwait</option>
    <option value="Kyrgyzstan">Kyrgyzstan</option>
    <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
    <option value="Latvia">Latvia</option>
    <option value="Lebanon">Lebanon</option>
    <option value="Lesotho">Lesotho</option>
    <option value="Liberia">Liberia</option>
    <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
    <option value="Liechtenstein">Liechtenstein</option>
    <option value="Lithuania">Lithuania</option>
    <option value="Luxembourg">Luxembourg</option>
    <option value="Macao">Macao</option>
    <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
    <option value="Madagascar">Madagascar</option>
    <option value="Malawi">Malawi</option>
    <option value="Malaysia">Malaysia</option>
    <option value="Maldives">Maldives</option>
    <option value="Mali">Mali</option>
    <option value="Malta">Malta</option>
    <option value="Marshall Islands">Marshall Islands</option>
    <option value="Martinique">Martinique</option>
    <option value="Mauritania">Mauritania</option>
    <option value="Mauritius">Mauritius</option>
    <option value="Mayotte">Mayotte</option>
    <option value="Mexico">Mexico</option>
    <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
    <option value="Moldova, Republic of">Moldova, Republic of</option>
    <option value="Monaco">Monaco</option>
    <option value="Mongolia">Mongolia</option>
    <option value="Montenegro">Montenegro</option>
    <option value="Montserrat">Montserrat</option>
    <option value="Morocco">Morocco</option>
    <option value="Mozambique">Mozambique</option>
    <option value="Myanmar">Myanmar</option>
    <option value="Namibia">Namibia</option>
    <option value="Nauru">Nauru</option>
    <option value="Nepal">Nepal</option>
    <option value="Netherlands">Netherlands</option>
    <option value="Netherlands Antilles">Netherlands Antilles</option>
    <option value="New Caledonia">New Caledonia</option>
    <option value="New Zealand">New Zealand</option>
    <option value="Nicaragua">Nicaragua</option>
    <option value="Niger">Niger</option>
    <option value="Nigeria">Nigeria</option>
    <option value="Niue">Niue</option>
    <option value="Norfolk Island">Norfolk Island</option>
    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
    <option value="Norway">Norway</option>
    <option value="Oman">Oman</option>
    <option value="Pakistan">Pakistan</option>
    <option value="Palau">Palau</option>
    <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
    <option value="Panama">Panama</option>
    <option value="Papua New Guinea">Papua New Guinea</option>
    <option value="Paraguay">Paraguay</option>
    <option value="Peru">Peru</option>
    <option value="Philippines">Philippines</option>
    <option value="Pitcairn">Pitcairn</option>
    <option value="Poland">Poland</option>
    <option value="Portugal">Portugal</option>
    <option value="Puerto Rico">Puerto Rico</option>
    <option value="Qatar">Qatar</option>
    <option value="Reunion">Reunion</option>
    <option value="Romania">Romania</option>
    <option value="Russian Federation">Russian Federation</option>
    <option value="Rwanda">Rwanda</option>
    <option value="Saint Helena">Saint Helena</option>
    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
    <option value="Saint Lucia">Saint Lucia</option>
    <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
    <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
    <option value="Samoa">Samoa</option>
    <option value="San Marino">San Marino</option>
    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
    <option value="Saudi Arabia">Saudi Arabia</option>
    <option value="Senegal">Senegal</option>
    <option value="Serbia">Serbia</option>
    <option value="Seychelles">Seychelles</option>
    <option value="Sierra Leone">Sierra Leone</option>
    <option value="Singapore">Singapore</option>
    <option value="Slovakia">Slovakia</option>
    <option value="Slovenia">Slovenia</option>
    <option value="Solomon Islands">Solomon Islands</option>
    <option value="Somalia">Somalia</option>
    <option value="South Africa">South Africa</option>
    <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
    <option value="Spain">Spain</option>
    <option value="Sri Lanka">Sri Lanka</option>
    <option value="Sudan">Sudan</option>
    <option value="Suriname">Suriname</option>
    <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
    <option value="Swaziland">Swaziland</option>
    <option value="Sweden">Sweden</option>
    <option value="Switzerland">Switzerland</option>
    <option value="Syrian Arab Republic">Syrian Arab Republic</option>
    <option value="Taiwan">Taiwan</option>
    <option value="Tajikistan">Tajikistan</option>
    <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
    <option value="Thailand">Thailand</option>
    <option value="Timor-leste">Timor-leste</option>
    <option value="Togo">Togo</option>
    <option value="Tokelau">Tokelau</option>
    <option value="Tonga">Tonga</option>
    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
    <option value="Tunisia">Tunisia</option>
    <option value="Turkey">Turkey</option>
    <option value="Turkmenistan">Turkmenistan</option>
    <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
    <option value="Tuvalu">Tuvalu</option>
    <option value="Uganda">Uganda</option>
    <option value="Ukraine">Ukraine</option>
    <option value="United Arab Emirates">United Arab Emirates</option>
    <option value="United Kingdom">United Kingdom</option>
    <option value="United States">United States</option>
    <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
    <option value="Uruguay">Uruguay</option>
    <option value="Uzbekistan">Uzbekistan</option>
    <option value="Vanuatu">Vanuatu</option>
    <option value="Venezuela">Venezuela</option>
    <option value="Viet Nam">Viet Nam</option>
    <option value="Virgin Islands, British">Virgin Islands, British</option>
    <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
    <option value="Wallis and Futuna">Wallis and Futuna</option>
    <option value="Western Sahara">Western Sahara</option>
    <option value="Yemen">Yemen</option>
    <option value="Zambia">Zambia</option>
    <option value="Zimbabwe">Zimbabwe</option>
</select>
</div>`;
  }
}

customElements.define("countries-list", CountriesList);

class MitskiThumbsUp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<svg width="2rem" height="2rem" viewBox="0 0 189 217" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_127_2)" filter="url(#filter0_d_127_2)">
<path d="M178.9 33.1C171.33 21.97 138.3 33.31 123.62 39.07C117.33 36.76 109.04 34.72 99.44 32.94C89.85 31.07 81.39 29.92 74.69 29.77C63.14 19.02 36.58 -3.65004 25.46 3.91996C14.41 11.44 20.17 38.93 23.45 51.32C14.95 60.97 10.33 72.42 8.38 82.68C6.69 91.54 6.07 100.6 6.51 109.86C7.37 127.93 18.51 143.8 35.25 150.63C39.27 152.27 43.32 153.78 47.4 155.16C43.73 160.2 41.6 166.17 41.6 172.58C41.6 190.6 58.43 205.21 79.2 205.21C99.97 205.21 116.8 190.6 116.8 172.58C116.8 170.32 116.53 168.11 116.03 165.98C134.08 165.73 150.23 155.07 157.66 138.6C161.47 130.15 164.21 121.5 165.89 112.63C167.84 102.38 167.75 90.03 163.39 77.94C170.98 67.63 186.43 44.15 178.91 33.1H178.9Z" fill="#9C9A9B"/>
<path d="M77.19 205.2C89.0089 205.2 98.59 197.123 98.59 187.16C98.59 177.197 89.0089 169.12 77.19 169.12C65.3711 169.12 55.79 177.197 55.79 187.16C55.79 197.123 65.3711 205.2 77.19 205.2Z" fill="white"/>
<path d="M107.76 41.07C104.97 55.74 98.44 66.82 93.19 65.82C87.93 64.82 85.92 52.12 88.71 37.45C89.09 35.44 89.54 33.5 90.06 31.65C96.3 32.55 102.49 33.72 108.63 35.19C108.43 37.1 108.14 39.07 107.76 41.07Z" fill="#6F818C"/>
<path d="M88.23 32.37C85.44 47.03 78.92 58.12 73.66 57.12C68.6 56.16 66.55 44.3 68.91 30.31C72.34 30.08 75.84 30.11 79.37 30.42C82.39 30.69 85.4 31.02 88.4 31.43C88.35 31.75 88.29 32.05 88.23 32.36V32.37Z" fill="#6F818C"/>
<path d="M128.83 41.58C125.9 55.52 119.63 65.86 114.55 64.89C109.29 63.89 107.3 51.18 110.08 36.52C110.14 36.21 110.2 35.9 110.27 35.59C113.64 36.42 117 37.35 120.34 38.35C123.28 39.24 126.11 40.32 128.83 41.57V41.58Z" fill="#6F818C"/>
<path d="M166.12 54.52C166.12 54.52 166.96 58.25 166.44 62.15C165.97 65.75 163.29 68.0401 160.26 68.6201C155.7 60.76 149.51 53.84 142.05 48.42C142.51 46.51 143.69 44.77 145.55 43.66C152.99 39.17 162.93 34.72 168.6 38.45C178.48 44.96 166.12 54.53 166.12 54.53V54.52Z" fill="white"/>
<path d="M32.12 28.5801C32.12 28.5801 29.95 31.7301 28.97 35.5401C28.06 39.0601 29.69 42.1801 32.28 43.8501C39.45 38.2601 47.78 34.1701 56.73 31.9201C57.02 29.9701 56.57 27.9201 55.27 26.1901C50.05 19.2501 42.5 11.4001 35.84 12.7401C24.24 15.0901 32.13 28.5801 32.13 28.5801H32.12Z" fill="white"/>
<path d="M113.48 168.36C110.79 168.36 108.09 168.31 105.43 168.21C104.12 168.16 103.1 167.06 103.15 165.75C103.2 164.44 104.3 163.41 105.61 163.47C109.01 163.6 112.48 163.64 115.92 163.6C124.33 163.5 132.48 161.01 139.49 156.4C146.49 151.8 152.02 145.3 155.49 137.62C159.2 129.39 161.91 120.84 163.55 112.19C165.37 102.59 166.66 83.86 154.79 66.22C154.06 65.13 154.35 63.66 155.43 62.92C156.52 62.19 157.99 62.48 158.73 63.56C171.55 82.61 170.18 102.76 168.22 113.07C166.51 122.09 163.68 131 159.82 139.57C155.98 148.08 149.86 155.27 142.1 160.37C134.33 165.48 125.3 168.23 115.98 168.35C115.15 168.35 114.32 168.36 113.49 168.36H113.48Z" fill="#6F818C"/>
<path d="M140.92 45.7C137.56 43.35 133.86 41.15 129.95 39.19C123.64 36.03 113.52 33.14 99.9 30.61C90.18 28.72 82.07 27.65 75.66 27.43C69.41 21.66 60.3 13.8 51.2 7.98002C38.74 2.24113e-05 29.88 -1.96998 24.12 1.96002C12.49 9.87002 16.88 35.36 20.83 50.7C11.26 62 7.5 74.58 6.05 82.23C4.33 91.25 3.69 100.58 4.14 109.97C4.58 119.29 7.64 128.23 12.99 135.82C18.34 143.42 25.73 149.3 34.36 152.83C44.81 157.1 55.59 160.53 66.38 163.03C66.56 163.07 66.74 163.09 66.92 163.09C68 163.09 68.98 162.35 69.23 161.25C69.53 159.97 68.73 158.7 67.45 158.4C56.91 155.96 46.38 152.6 36.16 148.43C28.37 145.25 21.71 139.94 16.88 133.08C12.06 126.23 9.3 118.16 8.9 109.74C8.47 100.73 9.09 91.77 10.73 83.12C12.55 73.52 18.23 55.62 35.75 43.57C36.83 42.83 37.1 41.35 36.36 40.27C35.62 39.19 34.14 38.91 33.06 39.66C29.94 41.81 27.17 44.13 24.71 46.55C19.63 25.33 20.37 10.27 26.81 5.89002C33.03 1.65002 48.88 9.92002 68.74 27.56C64.39 27.95 60.17 28.63 56.19 29.58C54.91 29.89 54.13 31.17 54.43 32.44C54.73 33.72 56.02 34.5 57.29 34.2C61.06 33.3 65.07 32.65 69.21 32.28C75.8 31.69 85.82 32.7 99.03 35.27C112.24 37.72 121.93 40.47 127.84 43.43C131.55 45.29 135.05 47.37 138.22 49.59C138.63 49.88 139.11 50.02 139.58 50.02C140.33 50.02 141.07 49.67 141.53 49.01C142.28 47.94 142.02 46.45 140.95 45.7H140.92Z" fill="#6F818C"/>
<path d="M57.22 28.26C61.23 27.4 65.49 26.82 69.86 26.53C76.91 26.07 87.35 27.35 100.88 30.32C110.57 32.36 118.46 34.53 124.45 36.82C132.45 33.93 143.9 30.24 154.55 28.41C169.12 25.91 178.04 27.54 181.83 33.4C189.47 45.21 175.51 66.98 165.9 79.59C170.33 93.72 168.89 106.77 167.25 114.39C165.32 123.37 162.29 132.21 158.23 140.68C154.19 149.1 147.9 156.14 140.03 161.06C132.14 165.98 123.05 168.53 113.73 168.42C102.44 168.28 91.18 167.25 80.27 165.36C80.09 165.33 79.91 165.28 79.75 165.21C78.75 164.79 78.14 163.73 78.34 162.62C78.56 161.33 79.79 160.46 81.09 160.69C91.75 162.54 102.76 163.55 113.8 163.68C122.21 163.78 130.42 161.48 137.53 157.04C144.64 152.61 150.32 146.24 153.96 138.64C157.86 130.5 160.77 122.01 162.62 113.4C164.67 103.85 166.4 85.15 154.95 67.23C154.24 66.12 154.57 64.66 155.67 63.95C156.78 63.24 158.24 63.57 158.95 64.67C160.99 67.86 162.64 71.08 163.97 74.26C176.9 56.69 182.08 42.53 177.85 35.98C173.76 29.66 155.95 31.11 130.79 39.64C134.65 41.69 138.27 43.96 141.57 46.39C142.63 47.17 142.85 48.65 142.08 49.71C141.3 50.77 139.81 50.99 138.76 50.22C135.64 47.92 132.19 45.77 128.53 43.82C122.69 40.72 113.06 37.74 99.9 34.98C86.78 32.1 76.78 30.86 70.18 31.29C66.03 31.56 62.01 32.11 58.22 32.93C57.72 33.04 57.23 32.98 56.8 32.8C56.11 32.51 55.57 31.9 55.4 31.11C55.12 29.83 55.94 28.56 57.22 28.29V28.26Z" fill="#6F818C"/>
<path d="M128.01 112.68C128.94 107.8 125.73 103.09 120.86 102.17C115.98 101.24 111.27 104.44 110.35 109.32C109.42 114.2 112.63 118.91 117.5 119.83C122.38 120.76 127.09 117.56 128.01 112.68Z" fill="#5F5C5D"/>
<path d="M61.26 99.98C62.19 95.1 58.99 90.39 54.11 89.47C49.23 88.54 44.52 91.75 43.6 96.62C42.67 101.5 45.88 106.21 50.75 107.13C55.63 108.06 60.34 104.85 61.26 99.98Z" fill="#5F5C5D"/>
<path d="M139.1 130.43C138.95 130.43 138.8 130.42 138.65 130.39L124.69 127.74C123.4 127.49 122.55 126.25 122.8 124.96C123.05 123.67 124.29 122.82 125.58 123.07L139.54 125.72C140.83 125.97 141.67 127.21 141.43 128.5C141.21 129.64 140.22 130.43 139.1 130.43Z" fill="#6F818C"/>
<path d="M134.06 143.06C133.64 143.06 133.22 142.95 132.84 142.72L122.22 136.32C121.1 135.64 120.73 134.18 121.41 133.06C122.09 131.94 123.55 131.58 124.67 132.25L135.29 138.65C136.41 139.33 136.77 140.79 136.1 141.91C135.65 142.65 134.87 143.06 134.06 143.06Z" fill="#6F818C"/>
<path d="M41.6 111.89C41.45 111.89 41.3 111.88 41.15 111.85L27.19 109.2C25.9 108.95 25.06 107.71 25.3 106.42C25.55 105.13 26.79 104.29 28.08 104.53L42.04 107.18C43.33 107.43 44.17 108.67 43.93 109.96C43.71 111.1 42.72 111.89 41.6 111.89Z" fill="#6F818C"/>
<path d="M27.68 122.83C26.54 122.83 25.54 122.01 25.34 120.85C25.12 119.56 25.99 118.33 27.29 118.11L39.51 116.05C40.8 115.83 42.03 116.7 42.25 118C42.47 119.29 41.6 120.52 40.3 120.74L28.08 122.8C27.95 122.82 27.81 122.83 27.68 122.83Z" fill="#6F818C"/>
<path d="M117.32 92.58C117.17 92.58 117.02 92.57 116.87 92.54L109.55 91.15C108.26 90.9 107.42 89.66 107.66 88.37C107.91 87.08 109.15 86.23 110.44 86.48L117.76 87.87C119.05 88.12 119.89 89.36 119.65 90.65C119.43 91.79 118.44 92.58 117.32 92.58Z" fill="#6F818C"/>
<path d="M69.12 83.41C68.97 83.41 68.82 83.4 68.67 83.37L61.35 81.98C60.06 81.73 59.22 80.49 59.46 79.2C59.71 77.91 60.95 77.06 62.24 77.31L69.56 78.7C70.85 78.95 71.69 80.19 71.45 81.48C71.23 82.62 70.24 83.41 69.12 83.41Z" fill="#6F818C"/>
<path d="M59.38 128.69C61.55 132.51 65.13 136.12 69.64 138.71C72.49 140.35 75.71 141.57 79.17 142.2C88.13 143.78 96.75 140.89 102.2 136.23C103.18 135.4 104.05 134.51 104.8 133.58C106.39 131.62 107.45 129.47 107.84 127.3C110.12 114.41 98.85 112.12 84.91 109.66C70.95 107.2 59.9 107.01 57.32 118.39C56.6 121.58 57.41 125.22 59.38 128.7V128.69Z" fill="#6F818C"/>
<path d="M104.79 133.57C99.83 139.7 89.73 144.05 79.16 142.19C70.21 140.61 62.92 134.92 59.37 128.69C66.92 124.11 83.41 118.08 104.79 133.57Z" fill="#E27FA3"/>
<path d="M103.69 112.53C103.69 112.53 103.67 112.51 103.65 112.5C99.65 110.17 94.25 108.93 87.68 107.73L88.5 103.32L90.06 103.62C90.21 103.65 90.36 103.66 90.51 103.66C91.63 103.66 92.62 102.87 92.84 101.73C93.08 100.44 92.24 99.2 90.95 98.95L83.11 97.46C81.82 97.21 80.58 98.06 80.33 99.35C80.09 100.64 80.93 101.88 82.22 102.13L83.83 102.44L83 106.92C76.77 105.92 70.05 105.31 64.88 106.88C59.61 108.48 56.29 112.17 55 117.85C54.06 122 55.21 126.79 58.23 131.34C62.74 138.12 70.41 143.05 78.76 144.52C80.6 144.84 82.42 145 84.2 145C97.47 145 108.63 136.54 110.19 127.7C111.4 120.86 109.21 115.76 103.7 112.53H103.69ZM105.5 126.87C104.31 133.63 95.02 140.24 84.18 140.24C82.67 140.24 81.13 140.11 79.58 139.84C72.59 138.61 65.93 134.34 62.18 128.71C59.92 125.3 58.98 121.73 59.63 118.9C60.54 114.9 62.64 112.52 66.26 111.42C71.13 109.94 78.21 110.87 84.49 111.98C91.66 113.24 97.44 114.39 101.24 116.59C101.24 116.59 101.25 116.59 101.26 116.6C105.11 118.84 106.38 121.91 105.5 126.87Z" fill="#6F818C"/>
<path d="M57.04 162.58C55.82 160.94 54.51 159.45 53.13 158.11C53.25 157.11 53.26 156.09 53.13 155.05L52.41 149.21C51.56 142.38 45.34 137.52 38.51 138.37L37.67 138.47C36.29 132.06 32.34 127.98 27.74 128.55C22.25 129.23 21.07 135.39 22.38 147.53C21.81 149.23 21.59 151.08 21.83 152.98L22.55 158.82C22.7 160.05 23.03 161.21 23.5 162.29C22.99 168.42 25.28 175.9 30.23 182.55C38.58 193.75 51.35 198.36 58.75 192.84C66.15 187.32 65.38 173.77 57.04 162.57V162.58Z" fill="#9C9A9B"/>
<path d="M29.17 144.88C33.7595 144.88 37.48 141.16 37.48 136.57C37.48 131.981 33.7595 128.26 29.17 128.26C24.5805 128.26 20.86 131.981 20.86 136.57C20.86 141.16 24.5805 144.88 29.17 144.88Z" fill="white"/>
<path d="M36.61 169.12C45.0821 169.12 51.95 162.252 51.95 153.78C51.95 145.308 45.0821 138.44 36.61 138.44C28.138 138.44 21.27 145.308 21.27 153.78C21.27 162.252 28.138 169.12 36.61 169.12Z" fill="white"/>
<path d="M66.18 179.72C65.83 173.54 63.26 166.95 58.95 161.17C57.92 159.78 56.79 158.46 55.59 157.22C55.62 156.41 55.59 155.59 55.49 154.76L54.77 148.92C53.82 141.22 47.08 135.62 39.46 135.92C37.4 129.38 32.76 125.54 27.45 126.21C22.81 126.78 20.95 130.3 20.21 133.15C19.38 136.34 19.3 140.83 19.97 147.25C19.4 149.18 19.22 151.23 19.47 153.29L20.19 159.13C20.35 160.39 20.66 161.58 21.1 162.71C20.71 169.56 23.32 177.27 28.33 183.99C32.65 189.78 38.23 194.12 44.05 196.22C46.57 197.13 49.01 197.58 51.31 197.58C54.64 197.58 57.67 196.64 60.18 194.77C64.42 191.61 66.55 186.27 66.18 179.73V179.72ZM50.05 149.51L50.77 155.35C51.45 160.87 47.52 165.92 42 166.6L36.16 167.32C33.48 167.65 30.84 166.92 28.72 165.26C26.59 163.6 25.24 161.22 24.91 158.54L24.19 152.7C23.86 150.03 24.59 147.38 26.25 145.26C27.91 143.13 30.29 141.78 32.97 141.45L38.81 140.73C39.23 140.68 39.65 140.65 40.06 140.65C45.08 140.65 49.43 144.4 50.07 149.5L50.05 149.51ZM28.04 130.93C30.73 130.59 33.21 132.75 34.62 136.47L32.38 136.75C29.32 137.13 26.52 138.42 24.28 140.44C24.16 132.64 26.05 131.18 28.04 130.93ZM57.34 190.96C51.11 195.61 39.57 191.12 32.14 181.16C29.42 177.51 27.49 173.46 26.52 169.54C28.93 171.2 31.84 172.16 34.91 172.16C35.52 172.16 36.13 172.12 36.74 172.05L42.58 171.33C47.84 170.68 52.12 167.33 54.21 162.84C54.52 163.23 54.83 163.62 55.13 164.02C58.89 169.07 61.13 174.74 61.43 180C61.71 184.89 60.25 188.79 57.33 190.96H57.34Z" fill="#6F818C"/>
<path d="M130.4 165.34C131.71 153.19 130.53 147.04 125.04 146.36C120.45 145.79 116.49 149.87 115.11 156.28L114.27 156.18C107.44 155.33 101.21 160.19 100.37 167.02L99.65 172.86C99.54 173.71 99.53 174.56 99.59 175.39C99.07 175.98 98.57 176.59 98.1 177.23C91.06 186.68 90.95 198.52 97.87 203.68C104.79 208.84 116.11 205.35 123.15 195.9C126.53 191.36 128.31 186.27 128.48 181.63C129.38 180.16 130 178.47 130.23 176.65L130.95 170.81C131.19 168.91 130.97 167.06 130.4 165.36V165.34Z" fill="#9C9A9B"/>
<path d="M123.51 162.63C128.099 162.63 131.82 158.91 131.82 154.32C131.82 149.731 128.099 146.01 123.51 146.01C118.921 146.01 115.2 149.731 115.2 154.32C115.2 158.91 118.921 162.63 123.51 162.63Z" fill="white"/>
<path d="M116.07 186.88C124.542 186.88 131.41 180.012 131.41 171.54C131.41 163.068 124.542 156.2 116.07 156.2C107.598 156.2 100.73 163.068 100.73 171.54C100.73 180.012 107.598 186.88 116.07 186.88Z" fill="white"/>
<path d="M132.81 165.06C133.48 158.63 133.4 154.14 132.57 150.94C131.23 145.78 127.89 144.32 125.34 144C120.03 143.33 115.38 147.17 113.32 153.71C105.7 153.41 98.97 159.01 98.01 166.71L97.29 172.55C97.21 173.22 97.17 173.88 97.18 174.54C96.84 174.96 96.5 175.37 96.19 175.79C92.48 180.76 90.42 186.53 90.37 192.02C90.32 197.79 92.48 202.6 96.45 205.56C99.02 207.48 102.1 208.39 105.36 208.39C112.18 208.39 119.77 204.4 125.06 197.3C128.47 192.72 130.5 187.42 130.83 182.31C131.73 180.69 132.35 178.88 132.59 176.92L133.31 171.08C133.57 168.99 133.38 166.95 132.81 165.06ZM124.75 148.72C126.74 148.96 128.63 150.43 128.5 158.24C126.32 156.27 123.53 154.92 120.4 154.54L118.16 154.26C119.57 150.54 122.05 148.38 124.75 148.72ZM102.01 173.14L102.73 167.3C103.36 162.2 107.72 158.45 112.74 158.45C113.15 158.45 113.57 158.48 113.99 158.53L119.83 159.25C125.35 159.93 129.29 164.98 128.6 170.5L127.88 176.34C127.55 179.01 126.2 181.4 124.07 183.06C121.94 184.72 119.3 185.45 116.63 185.12L110.79 184.4C108.12 184.07 105.73 182.72 104.07 180.59C102.41 178.46 101.68 175.82 102.01 173.15V173.14ZM121.25 194.47C115 202.86 105.15 206.12 99.29 201.76C96.57 199.73 95.09 196.29 95.12 192.07C95.15 188.3 96.38 184.34 98.6 180.71C100.7 185.15 104.96 188.47 110.19 189.11L116.03 189.83C116.65 189.91 117.26 189.94 117.86 189.94C120.29 189.94 122.61 189.34 124.67 188.27C123.85 190.41 122.69 192.51 121.24 194.46L121.25 194.47Z" fill="#6F818C"/>
</g>
<defs>
<filter id="filter0_d_127_2" x="0" y="0" width="188.04" height="216.39" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_127_2"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_127_2" result="shape"/>
</filter>
<clipPath id="clip0_127_2">
<rect width="180.04" height="208.39" fill="white" transform="translate(4)"/>
</clipPath>
</defs>
</svg>
`;
  }
}

customElements.define("mitski-icon2", MitskiThumbsUp);
