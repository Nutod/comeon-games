import React from "react";

export default function Login() {
  return (
    <div class="login" style={{ display: "block", marginTop: "50%" }}>
      <div class="ui grid centered">
        <form>
          <div class="fields">
            <div class="required field">
              <div class="ui icon input">
                <input type="text" name="username" placeholder="Username" />
                <i class="user icon" />
              </div>
            </div>
            <div class="required field">
              <div class="ui icon input">
                <input type="password" name="password" placeholder="Password" />
                <i class="lock icon" />
              </div>
            </div>
            <div class="field">
              <div class="ui icon input">
                <input type="submit" value="Login" />
                <i class="right chevron icon" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
