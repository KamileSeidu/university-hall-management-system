import { useLoaderData } from "react-router-dom";
import EditStudentForm from "../components/EditStudentForm";

function EditStudentPage() {
  const student = useLoaderData();

  return <EditStudentForm student={student} />;
}

export default EditStudentPage;
