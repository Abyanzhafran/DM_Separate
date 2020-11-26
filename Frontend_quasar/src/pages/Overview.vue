<template>
  <q-page class="">
        <div class="q-pb-none">
          <h6>The Automation of Your Organizational Structure</h6>
          <q-tree :nodes="simple" node-key="label" />
        </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
      return {
          simple: [
                {
                    label: "ORGANIZATION/COMPANY",
                    icon: "apartment",
                    class: "text-weight-medium",
                    children: [
                        {
                            label: "Leader",
                            icon: "how_to_reg",
                            children: [
                                {
                                    label: "President",
                                    icon: "person_pin",
                                },
                                {
                                    label: "Vice President",
                                    icon: "account_circle",
                                },
                            ],
                        },
                        {
                            label: "Stakeholder",
                            icon: "supervisor_account",
                            children: [
                                {
                                    label: "Manager 1",
                                    icon: "supervised_user_circle",
                                },
                                {
                                    label: "Manager 2",
                                    icon: "supervised_user_circle",
                                },
                                {
                                    label: "Manager 3",
                                    icon: "supervised_user_circle",
                                },
                            ],
                        },
                        {
                            label: "Division",
                            icon: "widgets",
                            children: [
                                {
                                    label: "A division",
                                    icon: "admin_panel_settings",
                                },
                                {
                                    label: "A division",
                                    icon: "admin_panel_settings",
                                },
                                {
                                    label: "A division",
                                    icon: "admin_panel_settings",
                                },
                            ],
                        },
                    ],
                },
            ],
      }
  }
}
</script>
