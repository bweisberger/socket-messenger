export const getErrorStatus = (err) => {
  if (isUnprocessableEntity(err)) {
    return 422;
  } else {
    return 500;
  }
}

const isUnprocessableEntity = (err) => {
  return err.message.includes('Message is missing field ');
}