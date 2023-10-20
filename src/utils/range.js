export default function range(start = 0, end, step = 1) {
    if (step === 0) {
      throw new Error("Step cannot be zero.");
    }
    if (end > 1000) throw new Error("End must not exceed 1000")
  
    const result = [];
    let current = start;
  
    if (step > 0) {
      while (current < end) {
        result.push(current);
        current += step;
      }
    } else if (step < 0) {
      while (current > end) {
        result.push(current);
        current += step;
      }
    }
  
    return result;
  }