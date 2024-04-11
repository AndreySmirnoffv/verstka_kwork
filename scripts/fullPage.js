let currentBlockIndex = 1;

function scrollToBlock(index) {
  const targetBlock = document.getElementById(`block${index}`);

  if (targetBlock) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetOffset = targetBlock.offsetTop;

    if (scrollTop !== targetOffset) {
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
      });
    }
  }
}

function scrollToNextBlock() {
  currentBlockIndex++;
  if (currentBlockIndex > 3) {
    currentBlockIndex = 1;
  }
  scrollToBlock(currentBlockIndex);
}

function scrollToPrevBlock() {
  currentBlockIndex--;
  if (currentBlockIndex < 1) {
    currentBlockIndex = 3;
  }
  scrollToBlock(currentBlockIndex);
}