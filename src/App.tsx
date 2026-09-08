import { CRM } from "@/components/atomic-crm/root/CRM";
import {
  authProvider,
  dataProvider,
} from "@/components/atomic-crm/providers/fakerest";
import { memoryStore } from "ra-core";

/**
 * Temporary public test mode for Melchi.
 *
 * Uses Atomic CRM's built-in FakeRest providers so the application can be
 * opened and exercised without Supabase authentication while the production
 * Supabase wiring is being finalized.
 */
const App = () => (
  <CRM
    dataProvider={dataProvider}
    authProvider={authProvider}
    store={memoryStore()}
  />
);

export default App;
