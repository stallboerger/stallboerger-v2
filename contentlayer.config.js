import { defineDocumentType, makeSource, defineNestedType } from 'contentlayer2/source-files';

const Credits = defineNestedType(() => ({
    name: 'Credits',
    fields: {
        name: {
            type: 'string',
        },
        url: {
            type: 'string',
        }
    }
}))

const Thought = defineDocumentType(() => ({
    name: 'Thought',
    filePathPattern: `thoughts/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        date: {
            type: 'string',
            required: true,
        },
        image: {
            type: 'string'
        },
        credits: {
            type: 'nested',
            of: Credits
        },
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, ""),
        },
        url: {
            type: "string",
            resolve: (doc) => doc._raw.flattenedPath
        }
    }
}))

const Collaborator = defineNestedType(() => ({
    name: 'Collaborator',
    fields: {
        name: {
            type: 'string',
            required: true
        },
        url: {
            type: 'string',
            required: true
        },
        avatar: {
            type: 'string',
            required: true
        }
    }
}))

const LiveLink = defineNestedType(() => ({
    name: 'LiveLink',
    fields: {
        title: {
            type: 'string',
            required: true
        },
        url: {
            type: 'string',
            required: true
        }
    }
}))

const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: `projects/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            required: true
        },
        year: {
            type: 'date',
            required: true
        },
        image: {
            type: 'string',
            // required: true
        },
        description: {
            type: 'string',
            required: true
        },
        playground: {
            type: 'boolean',
            required: true,
            default: false
        },
        links: {
            type: 'list',
            of: LiveLink
        },
        collaborators: {
            type: 'list',
            of: Collaborator
        }
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, ""),
        },
        url: {
            type: "string",
            resolve: (doc) => doc._raw.flattenedPath
        }
    }
}))

export default makeSource({
    contentDirPath: './content',
    documentTypes: [Thought, Project]
})