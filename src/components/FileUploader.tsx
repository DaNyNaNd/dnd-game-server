import * as React from "react";

const FileUploader = () => {
  const handleSubmit = () => {
    // This is where the action to upload an image would be handled
    alert("You hit submit!");
  };

  return (
    <form>
      <input type="file" />
      <button type="submit" name="Submit" onPress={handleSubmit} />
    </form>
  );
};

export default FileUploader;
