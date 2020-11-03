import * as React from "react";

export const FileUploader = () => {
  const handleSubmit = () => {
    // This is where the action to upload an image would be handled
    alert("You hit submit!");
  };

  return (
    <form>
      <input type="file" />
      <button type="submit" name="Submit" onSubmit={handleSubmit} />
    </form>
  );
};
