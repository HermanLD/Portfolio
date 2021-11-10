<template>
  <form id="contactForm" :action="myEmail" class="form-signup">
    <!-- Email address input-->
    <div class="input-group-newsletter">
      <input
        id="sender-name"
        class="form-control"
        name="name"
        type="text"
        placeholder="Enter Your Name..."
        aria-label="Enter Your Name..."
        required
      />
      <input
        id="emailAddress"
        class="form-control"
        name="email"
        type="email"
        placeholder="Enter email address..."
        aria-label="Enter email address..."
        required
      />
      <textarea
        id="sender-msg"
        class="form-control"
        name="message"
        placeholder="Message..."
        aria-label="Message..."
        required
        rows="5"
      />
      <button id="submitButton" class="btn btn-primary" type="submit">
        SEND
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      myEmail: '',
    }
  },
  async fetch() {
    this.myEmail = await this.$nuxt.context.env.secretEmail
  },
}
</script>
