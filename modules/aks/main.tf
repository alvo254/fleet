resource "azurerm_kubernetes_cluster" "jcg" {
  name                = "jcg-frontend1"
  location            = var.location
  resource_group_name = var.resource_group
  dns_prefix          = "exampleaks1"

  default_node_pool {
    name       = "jcg-frontend-node-pool"
    node_count = 2
    vm_size    = "Standard_D2_v2"
  }

  identity {
    type = "SystemAssigned"
  }

  tags = {
    Environment = "Production"
  }
}

