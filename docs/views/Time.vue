<template>
    <div>
        <div class="panel">
            <b-time :time="time1"></b-time>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      time1: (new Date().getTime())
    };
  }
};
</script>
