module "rg" {
  source = "./modules/rg"
}

module "vnet" {
  source = "./modules/vnet"
  resource_group = module.rg.rgId
  location = module.rg.location
}
