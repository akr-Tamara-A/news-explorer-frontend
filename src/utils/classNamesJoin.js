export default function classNamesJoin(basicClass, addedClasses) {
  let resultClass = basicClass;

  if (addedClasses.length !== 0) {
      resultClass += ' ' + addedClasses;
  }

  return resultClass;
}