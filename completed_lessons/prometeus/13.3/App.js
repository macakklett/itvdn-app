import Memo from "./components/Memo";
import Callback from './components/Callback';

export default function HooksSecondTask() {
  return (
    <>
      <section className="my-4">
        <Memo />
      </section>

      <section className="my-4">
        <Callback />
      </section>
    </>
  );
}
