locals {
    network = yamldecode(file("${path.module}/networking.yaml"))
}

resource "azurerm_virtual_network" "vnet" {
    name = local.network.vnet
    location = var.location
    resource_group_name = var.resource_group
    address_space = [local.network.address_space]
    dynamic "subnet" {
        for_each = local.network.subnets
        content {
            name = subnet.value.name
            address_prefix = subnet.value.iprange
        }
    }
}