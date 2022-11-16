import type { ConsolePluginMetadata } from '@openshift-console/dynamic-plugin-sdk-webpack/lib/schema/plugin-package';

export default {
  name: 'forklift-console-plugin',
  version: '0.0.1',
  displayName: 'OpenShift Console Plugin For Forklift',
  description:
    'Forklift is a suite of migration tools that facilitate the migration of VM workloads to KubeVirt.',
  exposedModules: {
    ProvidersPage: './extensions/ProvidersWrapper',
    PlansPage: './extensions/PlansWrapper',
    MappingsPage: './extensions/MappingsWrapper',
    HostsPage: './extensions/HostsPageWrapper',
    PlanWizard: './extensions/PlanWizardWrapper',
    VMMigrationDetails: './extensions/VMMigrationDetailsWrapper',
  },
  dependencies: {
    '@console/pluginAPI': '*',
  },
} as ConsolePluginMetadata;