import source1 from '../examples/source-01.jpg';
import source2 from '../examples/source-02.jpg';
import source3 from '../examples/source-03.jpg';

const projectsData = {
  headers: ['Project 1', 'Project 2', 'Project 3'],
  images: {
    'Project 1': ['Image 1'],
    'Project 2': ['Image 2'],
    'Project 3': ['Image 3']
  },
  icons: {
    'Project 1': ['Icon 1', 'Icon 2', 'Icon 3'],
    'Project 2': ['Icon 1'],
    'Project 3': ['Icon 1', 'Icon 2', 'Icon 3', 'Icon 4'],
  },
  comments: [
    `Mauris eu ligula non magna dictum dignissim. Nulla et sapien et metus ullamcorper dignissim. In vitae dapibus ex. Suspendisse pretium molestie ipsum, non consequat est pretium eu. Quisque egestas arcu libero, quis aliquam nibh egestas vitae. Duis id facilisis metus. Vestibulum rutrum tincidunt metus in facilisis. Donec eros odio, euismod ut justo vitae, elementum pharetra augue. Nulla id vehicula augue. Nulla facilisi.

    Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam at ultrices nunc. Vestibulum rutrum, felis a euismod congue, lacus arcu placerat lorem, quis sagittis nunc urna quis tortor. Sed fermentum eget enim quis pretium. Curabitur eget pellentesque est. Sed sit amet posuere magna, a scelerisque ante. Etiam non odio erat. Aenean sit amet turpis vitae justo egestas consectetur. Donec ornare efficitur tellus, id condimentum leo suscipit vel.
    
    Phasellus lacinia tellus sit amet erat fringilla, sed ornare turpis ultrices. Sed et maximus orci. Pellentesque varius nisi eget urna consequat iaculis. Nullam vel laoreet ligula. Aenean elementum id turpis et hendrerit. Curabitur vehicula cursus dolor, vitae fringilla leo cursus id. Phasellus elementum nisl a eros dictum pulvinar. Proin aliquet, magna et pulvinar ornare, sem sem aliquet nisi, et imperdiet tortor neque et dui. Morbi eu faucibus nibh. Vivamus id sapien mattis, iaculis turpis quis, porta neque. Morbi pharetra felis vel magna sodales, et iaculis ex semper. Sed a gravida massa. In sed finibus risus. Integer id euismod justo. Fusce quam neque, pellentesque at eros at, tristique auctor massa. Nunc sed dictum neque.`,

    `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin lorem mi, venenatis vitae ligula eget, suscipit cursus quam. In venenatis tincidunt lectus id dapibus. Vivamus eget orci neque. Maecenas in interdum leo. Integer congue, quam vulputate tristique feugiat, ipsum justo pulvinar lacus, vel maximus lectus dolor ac mauris. In hac habitasse platea dictumst. Morbi odio sapien, maximus ac pharetra et, imperdiet vel ante. Mauris condimentum, risus vitae aliquam finibus, lectus metus feugiat velit, vel accumsan arcu diam nec ligula. Nulla facilisi. Quisque nisi odio, tempus vitae sodales a, scelerisque vel enim. Nam sollicitudin scelerisque felis id sagittis.

    Nam velit neque, facilisis et elit sit amet, rhoncus condimentum diam. Praesent a nisl a dolor eleifend elementum. Curabitur sem leo, consequat quis dapibus sed, ultricies ac nulla. Duis accumsan convallis pulvinar. Nulla ut sagittis massa, vitae vehicula odio. Vivamus euismod elit ligula, vel accumsan nulla ullamcorper ac. Sed tempus sodales felis, nec scelerisque massa scelerisque quis. Aenean iaculis convallis odio ac fringilla. Nulla sit amet erat laoreet nisi hendrerit faucibus eu at lectus. Aenean eget libero sit amet lacus egestas tempus. Proin elementum tempor mi quis interdum. Nam porta ipsum eu tellus mattis blandit. Donec semper lacus tellus. Etiam luctus auctor bibendum. Maecenas finibus mollis urna, a congue lectus ultricies vel. Cras condimentum nisl vel ligula pellentesque, id vestibulum lectus molestie.`,

    `Sed et fringilla tortor, eu feugiat dui. Mauris magna lorem, aliquet id pretium vitae, porttitor et libero. Phasellus feugiat bibendum metus a fermentum. In vel turpis porta, finibus massa sit amet, feugiat mi. Suspendisse fermentum nibh vitae sagittis dignissim. Pellentesque ut metus sollicitudin, lacinia ipsum vel, pellentesque lacus. Duis sit amet pellentesque arcu. Nulla eget mauris neque. Maecenas laoreet fermentum augue ut tincidunt. Integer euismod arcu mauris, ut cursus justo fermentum sed. Curabitur ornare, metus vitae auctor vulputate, ipsum eros molestie orci, eget luctus velit urna at neque. Praesent eget libero fermentum mi accumsan maximus id sit amet metus. Pellentesque fermentum, erat ac vestibulum auctor, orci nisi commodo ex, nec congue nisl nibh id dui. Vivamus ut mauris eros. Nam tempus turpis in elementum feugiat.

    In quis odio volutpat, ultricies purus a, dapibus dolor. Pellentesque id nisl molestie metus luctus elementum. Nam consectetur cursus cursus. Nulla suscipit iaculis lectus, id dictum neque consectetur id. Donec leo quam, suscipit et iaculis eu, mattis ut nisl. Phasellus id massa convallis, ultrices urna at, semper justo. Sed sed eros porta, tempor felis eget, eleifend nisl. Phasellus ipsum sapien, venenatis ut dictum at, euismod id ante. Aliquam pulvinar vitae lectus eget cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed euismod nulla. Vestibulum consequat enim dolor, quis efficitur ipsum tempor vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    
    Mauris feugiat ornare dui quis volutpat. Ut arcu augue, lacinia et volutpat vitae, varius a tellus. Cras fringilla vel orci quis tempor. Praesent a tortor iaculis, tempor purus id, condimentum ligula. Nam tempus a velit tempus volutpat. Morbi iaculis erat elit, ut finibus eros aliquet quis. Suspendisse id pharetra erat. Vivamus nisi mauris, eleifend ac condimentum sed, laoreet non nibh. Quisque leo lorem, dignissim sit amet neque eget, fringilla lobortis odio. Donec dui eros, finibus eu tincidunt eu, vulputate id dolor. Aliquam et finibus eros, non congue turpis. Praesent est quam, finibus vel semper ut, bibendum non ipsum. In dictum sapien non lacus rhoncus, quis finibus nisl vulputate.
    
    Nullam sollicitudin in velit a facilisis. Sed at eleifend ante. Nunc quis risus elementum, tristique nisi et, porta nisi. Nullam placerat posuere tincidunt. Vestibulum eu est nec magna aliquet aliquet vel sit amet ex. Suspendisse non laoreet tortor. Nulla pellentesque lacus nec sagittis rutrum. In maximus sapien magna, sed dictum lectus volutpat eget. Nullam quis sapien nec dolor fringilla aliquam. Quisque viverra non elit vel semper. Curabitur vestibulum velit augue, at luctus libero interdum a. Duis sit amet est sodales, dignissim lectus sit amet, feugiat justo. Nam dignissim nibh eu est mattis tincidunt. Phasellus et tempus dolor.`
  ],

  preview: [source1, source2, source3]
}

export default projectsData;