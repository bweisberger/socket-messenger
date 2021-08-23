export const getErrorStatus = (err) => {
  if (isMissingData(err)) {
    return 422;
  } else {
    return 500;
  }
}

const isMissingData= (err) => {
  return err.message.includes('Message is missing field ');
}