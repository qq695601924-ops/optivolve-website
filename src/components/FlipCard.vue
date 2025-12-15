<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <slot name="front" />
      </div>
      <div class="flip-card-back">
        <slot name="back" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.flip-card {
  perspective: 1000px;
  width: 334px;
  height: 424px;
  position: relative;
  cursor: pointer;
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    backface-visibility: hidden;
  }

  .flip-card-front {
    transform: rotateY(0deg);
  }

  .flip-card-back {
    transform: rotateY(180deg);
  }
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
</style>
