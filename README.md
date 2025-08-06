# Azure Resource Move Support Search

A comprehensive search tool for Azure resource migration capabilities, designed to help developers and IT professionals quickly determine which Azure resources can be moved between resource groups, subscriptions, and regions.

## 🎯 Purpose

This project has been created for:
- **Developers** planning Azure infrastructure migrations
- **Cloud Architects** designing resource organization strategies
- **DevOps Engineers** managing resource lifecycle and deployments
- **Anyone** who needs to migrate their Azure resources efficiently

Understanding Azure resource move capabilities is crucial when restructuring your cloud infrastructure, consolidating resources, or migrating between environments.

## 🔍 What This Tool Provides

This application allows you to:
- **Search** through hundreds of Azure resource types
- **Filter** resources by name or type
- **View** move support capabilities for each resource:
  - Resource Group moves (within same subscription)
  - Subscription moves (between different subscriptions)
  - Region moves (between different Azure regions)

## 🛠️ Technology Stack

- **Frontend**: SvelteKit with TypeScript
- **Styling**: Bulma CSS Framework
- **Icons**: Font Awesome
- **Package Manager**: pnpm
- **Data Source**: Scraped using Python with Scrapy

## 📊 Data Source

The resource data in this application has been collected using **Scrapy with Python**. The scraping project that generates this data can be found at:

**🔗 [Azure Move Support Scrapy Project](https://github.com/cjrdz/azmvscrapy)**

This ensures that the information is up-to-date and comprehensive, covering the latest Azure resource types and their migration capabilities.

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd azmvsupport
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Start the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📱 Usage

1. **Search**: Enter an Azure resource type in the search bar (e.g., "storage", "virtual machine", "sql")
2. **Browse Results**: View the filtered results showing resource types and their move capabilities
3. **Understand Capabilities**: Check the Yes/No indicators for each move type:
   - ✅ **Yes**: Move is supported
   - ❌ **No**: Move is not supported

## 🏗️ Building for Production

To create a production build:

```bash
pnpm build
# or
npm run build
```

To preview the production build:

```bash
pnpm preview
# or
npm run preview
```

## 📋 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm check` - Run Svelte checks
- `pnpm format` - Format code with Prettier
- `pnpm lint` - Lint code with ESLint

## 🤝 Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

For data updates, please contribute to the [Scrapy project](https://github.com/cjrdz/azmvscrapy) that generates the resource data.

## 📄 License

This project is open source. Please check the license file for more details.

## 🆘 Support

If you encounter any issues or have questions:
- Open an issue in this repository
- Check the [Azure documentation](https://docs.microsoft.com/en-us/azure/) for official resource move guidance
- Refer to the [Scrapy data source project](https://github.com/cjrdz/azmvscrapy) for data-related questions

## 📚 Additional Resources

- [Azure Resource Manager move operations](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/move-resources-overview)
- [SvelteKit Documentation](https://kit.svelte.dev/)
- [Bulma CSS Framework](https://bulma.io/)

---

**Made with ❤️ for the Azure community**