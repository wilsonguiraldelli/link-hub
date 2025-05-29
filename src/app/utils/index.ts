export function later(delay = Number(process.env.NEXT_PUBLIC_DELAY || 1000)) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
