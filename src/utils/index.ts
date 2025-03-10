export function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(dateString));
};

export function truncateString (str: string, number: number) {
  if (str.length > number) {
    return str.slice(0, number) + '...'
  } else {
    return str
  }
}

export const generateUUID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

export function getRandomNumberFromUUID(uuid: string) {
  const hexPart = uuid.replace(/-/g, '').slice(0, 8);
  const number = parseInt(hexPart, 16);
  return number % 1000;
}

export const getRandomImageUrl = ({ id, dimension }: {id: string, dimension: number[]}) => {
  return `https://picsum.photos/id/${getRandomNumberFromUUID(id)}/${dimension[0]}/${dimension[1]}`
}

export const imageGradient = "to left top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)"
export const imageGradientHover = "to left top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)"

