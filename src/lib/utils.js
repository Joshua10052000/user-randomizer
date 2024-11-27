/**
 * @param { (data: Record<string, string>) => void } submitter
 */
function handleSubmit(submitter) {
  /**
   * @param { SubmitEvent } e
   */
  return (e) => {
    e.preventDefault();

    const formNode = e.target;
    const formData = new FormData(formNode);
    /**
     * @type { Record<string, string> }
     */
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    submitter(data);
  };
}

export { handleSubmit };
