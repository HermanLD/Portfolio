<template>
  <form id="contactForm" class="form-signup">
    <!-- Email address input-->
    <div class="input-group-newsletter">
      <input
        id="sender-name"
        class="form-control"
        type="text"
        placeholder="Enter Your Name..."
        aria-label="Enter Your Name..."
      />
      <input
        id="emailAddress"
        class="form-control"
        type="email"
        placeholder="Enter email address..."
        aria-label="Enter email address..."
      />
      <textarea
        id="sender-msg"
        class="form-control"
        placeholder="Message..."
        aria-label="Message..."
        rows="5"
      />
      <button id="submitButton" class="btn btn-primary" type="submit">
        SEND
      </button>
    </div>
    <!-- <div class="row input-group-newsletter">
      <div class="col">
        <input
          id="emailAddress"
          class="form-control"
          type="email"
          placeholder="Enter email address..."
          aria-label="Enter email address..."
          data-sb-validations="required,email"
        />
      </div>
      <div class="col-auto">
        <button
          id="submitButton"
          class="btn btn-primary disabled"
          type="submit"
        >
          Notify Me!
        </button>
      </div>
    </div> -->
    <div class="invalid-feedback mt-2" data-sb-feedback="emailAddress:required">
      An email is required.
    </div>
    <div class="invalid-feedback mt-2" data-sb-feedback="emailAddress:email">
      Email is not valid.
    </div>
    <!-- Submit success message-->
    <!---->
    <!-- This is what your users will see when the form-->
    <!-- has successfully submitted-->
    <div id="submitSuccessMessage" class="d-none">
      <div class="text-center mb-3 mt-2 text-white">
        <div class="fw-bolder">Form submission successful!</div>
        To activate this form, sign up at
        <br />
        <a href="https://startbootstrap.com/solution/contact-forms"
          >https://startbootstrap.com/solution/contact-forms</a
        >
      </div>
    </div>
    <!-- Submit error message-->
    <!---->
    <!-- This is what your users will see when there is-->
    <!-- an error submitting the form-->
    <div id="submitErrorMessage" class="d-none">
      <div class="text-center text-danger mb-3 mt-2">
        Error sending message!
      </div>
    </div>
  </form>
</template>
