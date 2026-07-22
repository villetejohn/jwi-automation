// Maps the icon name strings that come back from content.json (see
// app/site_content.py ICON_NAMES) to the actual lucide-react component.
// content.json can only hold strings, not component references, so
// every place that used to do `product.icon` as a component now does
// `ICON_MAP[product.icon]` instead.
import { Settings, Zap, Wind, Shield, Activity, Award, Briefcase, Users, Cpu, Home, Lock } from "lucide-react";

export const ICON_MAP = { Settings, Zap, Wind, Shield, Activity, Award, Briefcase, Users, Cpu, Home, Lock };
