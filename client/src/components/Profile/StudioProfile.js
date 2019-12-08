import React from "react";

const StudioProfile = ({
  handleSubmit,
  name,
  phone,
  venue,
  address1,
  address2,
  postalCode,
  region,
  city,
  email,
  isListed,
  studioName,
  guest,
  price,
  rules,
  hoursOfOperation,
  studioType,
  studioid
}) => {
  return (
    <div>
      <div>
        <form onSubmit={e => handleSubmit(e, "studio")}>
          <input type="hidden" value={studioid} name="studioid" />
          <div className="form-group">
            <label className="control-label">Studio Name</label>
            <div className="form-group">
              <input
                id="studio-name"
                name="studioName"
                type="text"
                placeholder="Enter the Name of Your Studio"
                className="form-control"
                defaultValue={studioName}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label">Price</label>
            <div className="form-group">
              <input
                id="price"
                name="price"
                type="number"
                min="10"
                step="1"
                max="300"
                placeholder=""
                className="form-control"
                defaultValue={price}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label">Studio Type</label>
            <select
              name="studioType"
              className="form-control"
              defaultValue={studioType}
            >
              {/* Need Studio Table in DB */}
              <option value="Recording - Music">Recording - Music</option>
              <option value="Recording - Podcast">Recording - Podcast</option>
              <option value="Yoga">Yoga</option>
              <option value="Photography">Photography</option>
              <option value="Film">Film</option>
              <option value="Art">Art</option>
            </select>
          </div>

          <div className="form-group d-none">
            <label className="control-label">Availibility</label>
            <br />
            <input
              name="hoursOfOperation"
              value="none"
              className="d-none hide"
            />
          </div>

          <div className="form-group">
            <label className="control-label">Rules</label>
            <div className="form-group">
              <textarea
                id="rules"
                name="rules"
                max="2500"
                placeholder="Example: Minimum 2 hr sessions No smoking and No alcohol"
                className="form-control"
                defaultValue={rules}
              ></textarea>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label">Number of Guest Allowed</label>
            <div className="form-group">
              <input
                id="guest"
                name="guest"
                type="number"
                min="1"
                step="1"
                max="300"
                placeholder=""
                className="form-control"
                defaultValue={guest}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label">Studio Owner</label>
            <div className="form-group">
              <input
                id="full-name"
                name="name1"
                type="text"
                placeholder="full name"
                className="form-control"
                defaultValue={name}
              />
              <p className="help-block"></p>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label">Email</label>
            <div className="form-group">
              <input
                id="full-name"
                name="email"
                type="email"
                placeholder="email"
                className="form-control"
                defaultValue={email}
              />
              <p className="help-block"></p>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label">Phone</label>
            <div className="form-group">
              <input
                id="phone"
                name="phone"
                type="phone"
                placeholder="Phone Number"
                className="form-control"
                defaultValue={phone}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label">Address Line 1</label>
            <div className="form-group">
              <input
                id="address-line1"
                name="address1"
                type="text"
                placeholder="address line 1"
                className="form-control"
                defaultValue={address1}
              />
              <p className="help-block">
                Street address, P.O. box, company name, c/o
              </p>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label">Address Line 2</label>
            <div className="form-group">
              <input
                id="address-line2"
                name="address2"
                type="text"
                placeholder="address line 2"
                className="form-control"
                defaultValue={address2}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label">City / Town</label>
            <div className="form-group">
              <input
                id="city"
                name="city"
                type="text"
                placeholder="city"
                className="form-control"
                defaultValue={city}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label">State / Province / Region</label>
            <div className="form-group">
              <input
                id="region"
                name="region"
                type="text"
                placeholder="state / province / region"
                className="form-control"
                defaultValue={region}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label">Venue</label>
            <div className="form-group">
              <select name="venue" className="form-control" value={venue}>
                <option>Home </option>
                <option>Business</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label">Zip / Postal Code</label>
            <div className="form-group">
              <input
                id="postal-code"
                name="postalCode"
                type="text"
                placeholder="zip or postal code"
                className="form-control"
                defaultValue={postalCode}
              />
            </div>
          </div>

          {/* <label className="control-label">Add Studio Images</label>   
    <div className="custom-file form-group">
    
    <div className="form-group">
    
    <input className="form-control" type="file"  multiple />
    </div>
    </div> */}
          <hr />

          <div className="form-group row">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudioProfile;
