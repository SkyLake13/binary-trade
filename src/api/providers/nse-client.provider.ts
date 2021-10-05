
import { NSEClient } from "../../integration/nse.client";
import { axiosInstance } from "./http-client.provider";

const NSEClientProvider = new NSEClient(axiosInstance);

export { NSEClientProvider }