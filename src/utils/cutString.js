const cutString = (string, stringLength) => {
  let verifiedTitle = string

  if (verifiedTitle.length > 59) {
    const truncatedTitle = verifiedTitle.slice(0, stringLength);
    verifiedTitle = `${truncatedTitle}...`
  }

  return verifiedTitle
}

export default cutString