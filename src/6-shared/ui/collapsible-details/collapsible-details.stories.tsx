import type { Meta, StoryObj } from "@storybook/react";
import CollapsibleDetails from ".";

const mockChildren = (
  <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur imperdiet ullamcorper. Pellentesque posuere, dui nec tincidunt sagittis, diam justo imperdiet nisi, sed tristique enim dolor quis orci. Suspendisse volutpat tortor leo, at faucibus felis accumsan sed. Integer ut ultrices elit. Proin blandit hendrerit nisl id convallis. Morbi finibus venenatis sapien, vitae feugiat ipsum. Ut scelerisque tellus semper, mattis augue eu, iaculis dolor. Mauris at risus sem. Mauris vitae urna et tellus malesuada ultricies a a enim. Nulla eget augue ac risus fermentum sodales.</p>
    <p>Curabitur vitae sem elit. Mauris vitae dui id tortor tincidunt laoreet sit amet sit amet justo. Nulla non nisl mauris. Suspendisse lobortis neque sed purus condimentum sagittis. Integer tempor nisl efficitur volutpat convallis. Sed eget suscipit lectus. Donec at sapien urna. Fusce in tempor metus. Fusce velit sem, efficitur nec nunc vel, hendrerit tempus quam. Curabitur lorem velit, sollicitudin eu quam sed, porttitor placerat quam. Nulla facilisi. Pellentesque finibus, justo vel rutrum fermentum, nisi ante vestibulum nisi, at mollis ante dolor eu sapien. Aliquam tristique posuere justo eget dapibus. Vivamus eget dui feugiat, tincidunt lorem quis, aliquam nibh. Quisque faucibus turpis sed nisl pellentesque, id efficitur turpis dictum. Quisque pretium, enim eu dapibus varius, massa nibh auctor augue, ac posuere metus arcu luctus urna.</p>
    <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent gravida porttitor ipsum at consectetur. Nullam iaculis rutrum dui, sed elementum massa commodo porta. Donec neque augue, aliquet nec orci ut, gravida luctus nunc. Fusce vestibulum elementum lacinia. Nullam eget velit mi. Etiam rhoncus lectus eu ex vestibulum, non fermentum libero varius. Vivamus in nibh luctus, tristique augue pellentesque, euismod neque. Nullam malesuada nec diam sed pharetra. Pellentesque tristique a orci in mollis. Nunc pulvinar, lacus eget sagittis ultrices, ex nisi lacinia risus, in vehicula ipsum metus eu tellus. Ut sodales, nulla eu rutrum volutpat, ante nisl auctor odio, non consequat orci mauris id est. Integer elementum ut arcu in bibendum. In egestas porttitor lacus ac ullamcorper.</p>
  </div>
);

const meta = {
  title: "UI/CollapsibleDetails",
  component: CollapsibleDetails,
  tags: ["autodocs"],
  argTypes: {
  },
  args: {},
} satisfies Meta<typeof CollapsibleDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: mockChildren
  },
};

export const WithTitle: Story = {
  args: {
    children: mockChildren,
    title: 'Lorem ipsum dolor sit amet'
  },
};

export const WithDarkOverlay: Story = {
  args: {
    children: mockChildren,
    title: 'Lorem ipsum dolor sit amet',
    titleOverlay: 'dark'
  },
};

export const WithLightOverlay: Story = {
  args: {
    children: mockChildren,
    title: 'Lorem ipsum dolor sit amet',
    titleOverlay: 'light'
  },
};
